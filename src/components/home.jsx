import useHistory from 'react-dom';

export default function Home(props) {
    const history = useHistory();
    const checkhistory = () => {
        this.props.history.push('/samandar');
    }
    return (
        <div>
            <button onClick={this.checkhistory} className="btn-primary btn-sm">Subject</button>
            <h1>Hello and Welcome Home</h1>
        </div>
    )
}