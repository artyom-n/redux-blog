export type AllActions = setComments;

export const SET_COMMENTS = 'SET_COMMENTS';

export interface CommentsState {
    comments: CommentType[];
  }

export type CommentType = {
    postId: number;
    comments: string[];
};

export type setComments = {
    type: typeof SET_COMMENTS;
    comments: CommentType[];
};

