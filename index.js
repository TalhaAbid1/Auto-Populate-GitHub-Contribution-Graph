const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');
const FILE_PATH = './data.json';

const commitBot= (itrationNo) =>{
    if (itrationNo === 0) {
        return (
            simpleGit().push()
        )
    }
    const WeeksPerYear = Math.floor(Math.random() * 52) + 1;
    const DaysPerWeeks = Math.floor(Math.random() * 6) + 1;

    const DATE = moment().subtract(1 ,'y').add(WeeksPerYear , 'w').add(DaysPerWeeks , 'd') .format();
    
    const data = {
        data:DATE
    }
    console.log(DATE);
    jsonfile.writeFile(FILE_PATH , data , () => {
        simpleGit().add(FILE_PATH).commit(DATE, {'--date':DATE},commitBot.bind(this , --itrationNo))
    });
}

commitBot(100)
