import logo from './logo.svg';
import Header from './components/Header';
import Default from './components/Default';
import './App.scss';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/#about' component={About} />
        <Route path='/#service' component={Service} />
        <Route path='/#our-team' component={Team} />
        <Route path='/#news' component={News} />
        <Route path='/#careers' component={Careers} />
        <Route exact path='/#contact' component={Footer} />
        <Route component={Default} />
      </Switch>
  </React.Fragment>
  );
}

export default App;
