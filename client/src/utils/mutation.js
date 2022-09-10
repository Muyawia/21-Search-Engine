import { gql } from '@apollo/client';

export const USER_LOGIN = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
        user {  _id, username   }
        }
    }

`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      user {    _id, username   }
    }
  }
`;


export const SAVE_BOOK = gql`
  mutation saveBook($bookData: BookInput) {
    saveBook(bookData: $bookData) {    _id, username, email, savedBooks {   bookId, authors, image, description, title, link    }   }
  }
`;

export const DELETE_BOOK = gql`
  mutation removeBook($bookId: ID) {
    removeBook(bookId: $bookId) {   _id, username, email, savedBooks {     bookId, authors, image, description, title, link    }    }
  }
`;