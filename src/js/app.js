const React = require('react');
const ReactDOM = require('react-dom')

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {targets: []};
    }

    componentDidMount() {
        $.ajax({
            url: '/api/json',
            type: 'GET',
            dataType: 'json',
            success: function (res) {
                this.setState({targets: res.targets});
            }.bind(this),
            error: function (xhr, status, err) {
                console.log(status, err.toString());
            }.bind(this)
        });
    }

    render() {
        var list = this.state.targets
            .filter(function (target) {
                return target.startsWith("A");
            })
            .map(function (target) {
                return <li key={target}>{target}</li>
            });
        return (
            <div>
                <ul>{list}</ul>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)