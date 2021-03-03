// import { connect } from 'react-redux';
// import { Component } from 'react';
// import phoneBookOperations from './redux/phoneBook/phoneBook-operations';
// import Layout from './components/Layout';
// import ContactForm from './components/ContactForm/ContactForm';
// import ContactList from './components/ContactList/ContactList';
import PhoneBookView from './views/phoneBookView';

export default function App() {
  return <PhoneBookView />;
}

// const mapStateToProps = state => ({
//   isLoadingPhoneBook: state.phoneBook.loading,
// });

// const mapDispatchToProps = dispatch => ({
//   fetchContacts: () => dispatch(phoneBookOperations.fetchContacts()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);
