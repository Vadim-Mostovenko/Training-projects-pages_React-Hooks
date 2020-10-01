import React, { Component } from 'react'
import CoctailComponent from './CoctailComponent'
import TaskManager from './TaskManager'
import TicTacToeGame from './TicTacToeGame'
import { Button } from "react-bootstrap"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

class MainComponent extends Component {
    render() {
        return (
            <div className="p-2">
                <Router>
                <Link to="/tictactoegame" className="p-2"><Button variant="primary">Tic Tac Toe Game</Button></Link>
                <Link to="/taskmanager" className="p-2"><Button variant="success">Task list</Button></Link>
                <Link to="/coctailcomponent" className="p-2"><Button variant="secondary">Coctail API</Button></Link>
                    <Switch>
                        <Route path="/tictactoegame" component={TicTacToeGame}/>
                        <Route path="/taskmanager" component={TaskManager}/>
                        <Route path="/coctailcomponent" component={CoctailComponent}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default MainComponent