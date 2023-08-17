const {TransactionProcessor}=require('sawtooth-sdk-js/processor');
const IntegerKeyHandler = require('./handler/intkey');

const VALIDATOR_URL='tcp://localhost:4004'

const transactionProcessor=new TransactionProcessor(VALIDATOR_URL);

//Add all the transaction processor handler

transactionProcessor.addHandler(new IntegerKeyHandler());

transactionProcessor.start();

//handle Stop Process

process.on('SIGUSR2',()=>{
    transactionProcessor._handleShutdown()
})