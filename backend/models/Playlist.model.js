const mongoose = require('mongoose')

const playlistSchema = new mongoose.Schema(
    {
        playlistName: { 
            type: String, 
            required: true 
        },
        public: {
            type: Boolean,
            default: false
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        movieList: {
            type: [mongoose.Schema.Types.ObjectId],
            ref: 'Movie',
        }
    }
)

export const Playlist = mongoose.model("Playlist", playlistSchema)