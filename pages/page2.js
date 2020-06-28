import { callApi } from '../src/api';
import Router from 'next/router';

class Page2 extends React.Component {
  static async getInitialProps({ query }) {
    const text = query.text || 'none';
    const data = await callApi();
    return { text, data };
  }

  onClick = () => {
    Router.push('/page1');
  };

  render() {
    const { text, data } = this.props;
    return(
      <div>
        <button onClick={this.onClick}>page1</button>
        <p>this is home page2</p>
        <p>{`text: ${text}`}</p>
        <p>{`data: ${data}`}</p>
      </div>
    );
  };
}
export default Page2;