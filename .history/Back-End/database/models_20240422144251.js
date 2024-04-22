const Artist = require('../api/models/artist.model')
const Follow = require('../api/models/follow.model')
const Genre = require('../api/models/genre.model')
const Post = require('../api/models/post.model')
const Track = require('../api/models/track.model')
const User = require('../api/models/user.model')

const addRelationsToModels = () => {
  try {
    User.belongsToMany(Artist)
    Artist.belongsToMany(User)
  } catch (error) {
    console.log(error)
  }
}

module.exports = addRelationsToModels