const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const userSchema = new mongoose.Schema(
    {
        name: { 
            type: String, 
            required: true 
        },
        email: { 
            type: String, 
            required: true, 
            unique: true 
        },
        password: { 
            type: String, 
            required: true 
        },
    }
)
userSchema.methods.hashPassword = async function(password){
    const salt = await bcrypt.getSalt(10)
    
    return bcrypt.hash(password,salt)
}

userSchema.methods.comparePassword = async function(password)
{
    return bcrypt.compare(password, this.password)

}
module.exports = mongoose.model("User", userSchema)
