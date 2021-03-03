import { connect } from 'react-redux';
import { Component } from 'react';
import phoneBookOperations from '../redux/phoneBook/phoneBook-operations';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';

class phoneBookView extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <>
        <Layout>
          {this.props.isLoadingPhoneBook && <h1>Загржаем...</h1>}
          <ContactForm />

          <ContactList />
        </Layout>
      </>
    );
  }
}
const mapStateToProps = state => ({
  isLoadingPhoneBook: state.phoneBook.loading,
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(phoneBookOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(phoneBookView);