import mongoose, { Schema } from 'mongoose';

const emailMessageSchema = new Schema({
  fromEmail: {
    type: String,
    required: true,
  },
  toEmail: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  sentBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  isFlagged: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,
});

const EmailMessageModel = mongoose.model('EmailMessage', emailMessageSchema);

export default EmailMessageModel;
