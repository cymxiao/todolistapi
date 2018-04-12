'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

 

var leisureParkSchema = new Schema({
  startTime: {
    type: Date,
    required: 'Kindly enter the startTime'
  },
  endTime: {
    type: Date,
    required: 'Kindly enter the endTime'
  },
  status: {
    type: [{
      type: String,
      enum: ['待审核', '可申请', '已失效']
    }],
    default: ['可申请']
  },
  carport_ID : {
    type: Schema.Types.ObjectId,
    ref: 'carports',
    required: 'Kindly enter the carport_ID'
  },
  applied_UserID : {
    type: Schema.Types.ObjectId,
    ref: 'users' 
  },
  shared_UserID : {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  priceUnit: {
    type: [{
      type: String,
      enum: ['hour','day',  'month']
    }],
    default: ['day']
  },
  price: {
    type : Number,
    required:'Kindly enter the price'
  },
});

module.exports = mongoose.model('leisurePark', leisureParkSchema);