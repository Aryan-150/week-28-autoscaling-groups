import cluster from "cluster";
import os from "os";
import { app } from ".";

const CPU_COUNT = os.cpus().length;

if(cluster.isPrimary){
    console.log(`Master process ${process.pid} is running`);

    // fork the workers:
    for(let i = 0; i < CPU_COUNT; i++) {
        cluster.fork();
    }
    
} else {
    app.listen(3000, () => {
        console.log(`server is listening at port: 3000`);
    })    
}