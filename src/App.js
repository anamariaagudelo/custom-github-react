import React from 'react';
import Layout from './components/Layout/Layout';
import RegisterCandidate from './components/RegisterCandidate/RegisterCandidate'
import SearchGithubUser from './components/SearchGithubUser/SearchGithubUser'

class App extends React.Component {
  render() {
    return (
      <div >
       <Layout>
         <RegisterCandidate></RegisterCandidate>
         <SearchGithubUser></SearchGithubUser>
       </Layout>
      </div>
    );
  }
}

export default App;
