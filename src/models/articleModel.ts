import mongoose, { Document, Schema } from "mongoose";

interface Comment {
  text: string;
  author: string;
  createdAt: Date;
}

interface SocialLinks {
  twitter?: string;
  github?: string;
  linkedin?: string;
}

interface AuthorInfo {
  name: string;
  bio: string;
  socialLinks: SocialLinks;
}

interface ArticleDocument extends Document {
  title: string;
  content: string;
  author: string;
  tags: string[];
  comments: Comment[];
  categories: string[];
  likes: number;
  featuredImage: string;
  views: number;
  status: "draft" | "published";
  createdAt: Date;
  updatedAt: Date;
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
  authorInfo: AuthorInfo;
}

const articleSchema = new Schema<ArticleDocument>({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    default: [],
  },
  comments: [
    {
      text: String,
      author: String,
      createdAt: { type: Date, default: Date.now },
    },
  ],
  categories: [String],
  likes: {
    type: Number,
    default: 0,
  },
  featuredImage: String,
  views: {
    type: Number,
    default: 0,
  },
  status: {
    type: String,
    enum: ["draft", "published"],
    default: "draft",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  meta: {
    title: String,
    description: String,
    keywords: [String],
  },
  authorInfo: {
    name: String,
    bio: String,
    socialLinks: {
      twitter: String,
      github: String,
      linkedin: String,
    },
  },
});

const ArticleModel = mongoose.model<ArticleDocument>("Article", articleSchema);

export default ArticleModel;
