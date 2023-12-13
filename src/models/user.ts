import mongoose, { Document, Schema } from 'mongoose';

interface UserDocument extends Document {
  username: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  bio?: string;
  avatar?: string;
  roles?: string[];
  social?: {
    googleId?: string;
    facebookId?: string;
    // Add more as needed
  };
  personalInfo?: {
    firstName?: string;
    lastName?: string;
    dateOfBirth?: Date;
    address?: {
      street?: string;
      city?: string;
      state?: string;
      zip?: string;
    };
  };
  security?: {
    twoFactorAuth?: {
      enabled: boolean;
      secret: string;
    };
    // Add more security-related fields as needed
  };
  posts?: Schema.Types.ObjectId[];
  favorites?: Schema.Types.ObjectId[];
  following?: Schema.Types.ObjectId[];
  followers?: Schema.Types.ObjectId[];
  activityLog?: {
    action: string;
    timestamp: Date;
  }[];
}

const userSchema = new Schema<UserDocument>({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  bio: {
    type: String,
  },
  avatar: {
    type: String,
  },
  roles: {
    type: [String],
    default: ['user'],
  },
  social: {
    googleId: String,
    facebookId: String,
    // Add more as needed
  },
  personalInfo: {
    firstName: String,
    lastName: String,
    dateOfBirth: Date,
    address: {
      street: String,
      city: String,
      state: String,
      zip: String,
    },
  },
  security: {
    twoFactorAuth: {
      enabled: Boolean,
      secret: String,
    },
    // Add more security-related fields as needed
  },
  posts: [{ type: Schema.Types.ObjectId, ref: 'Article' }],
  favorites: [{ type: Schema.Types.ObjectId, ref: 'Article' }],
  following: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  followers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  activityLog: [{
    action: String,
    timestamp: Date,
  }],
});

const User = mongoose.model<UserDocument>('User', userSchema);

export default User;
