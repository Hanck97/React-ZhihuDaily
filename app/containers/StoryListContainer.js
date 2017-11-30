import React from 'react'
import { connect } from 'react-redux';
import * as Action from '../actions'
import moment from 'moment'



let currentDate = moment().subtract(1, 'days');

class StoryListContainer extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            scrollTop: 0,
            themesOpen: false,
        }
    }
componentWillUnmount() {
    
}

}


