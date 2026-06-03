const studentRoutes = require("../server/routes/studentRoutes");
const mongoose = require('mongoose')


// mongodb connection
try {
    mongoose.connect('mongodb+srv://ecobazar:VunC9IUh0RNm0NNN@cluster0.zbxw7l6.mongodb.net/ecobazar?appName=Cluster0'
)
    console.log('Database connected with MongoDB');
} catch (error) {
  console.log('Database connected failed, ERROR');
}


app.use("/api/students", studentRoutes);