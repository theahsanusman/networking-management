import React from "react"
import {Table} from "react-bootstrap"

const data = [
    { id: 'vwinovw', name: 'Anas', occupation: 'closer', age: 18, lastfollowup: '10-jan-2020', nextFollowup: '2-feb-2020' },
    { id: 'vwinovw', name: 'Anas', occupation: 'closer', age: 18, lastfollowup: '10-jan-2020', nextFollowup: '2-feb-2020' },
    { id: 'vwinovw', name: 'Anas', occupation: 'closer', age: 18, lastfollowup: '10-jan-2020', nextFollowup: '2-feb-2020' },
    { id: 'vwinovw', name: 'Anas', occupation: 'closer', age: 18, lastfollowup: '10-jan-2020', nextFollowup: '2-feb-2020' },
    { id: 'vwinovw', name: 'Anas', occupation: 'closer', age: 18, lastfollowup: '10-jan-2020', nextFollowup: '2-feb-2020' },
];
class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <div>
                <h1>Welcome Ahsan</h1>
                <Table responsive striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Occupation</th>
                            <th>Age</th>
                            <th>Last follow-up</th>
                            <th>Next follow-up</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((person, i) => (
                                <tr>
                                    <td>{i+1}</td>
                                    <td>{person.name}</td>
                                    <td>{person.occupation}</td>
                                    <td>{person.age}</td>
                                    <td>{person.lastfollowup}</td>
                                    <td>{person.nextFollowup}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Dashboard;