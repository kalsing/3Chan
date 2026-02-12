import User from "../models/User.js";
import Post from "../models/Post.js";
import { useRadioGroup } from "@mui/material";

class LoginControl {

async loginUser(req, res) {
    const { firstName, lastName, userPassword } = req.body;
    const user = await User.findOne({
      where:{
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userPassword: req.body.userPassword
      }
    });

    if(!user){
      return res.status(400).send()
    }

        if(user.userPassword !== userPassword){
      return res.status(400).send()
    }
    return res.json({
        userId: user.id,
      firstName: user.firstName,
      lastName: user.lastName
    })
}
}