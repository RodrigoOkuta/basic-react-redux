import React, { Component } from 'react'
import { connect } from 'react-redux'

class SongList extends Component {
    render() {
        const songsList = this.props.songs.map(song=>(
            <div>{song.title}</div>
        ))
        return (
            <div>
                {songsList}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { songs: state.songs }
}

export default connect(mapStateToProps)(SongList);