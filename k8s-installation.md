1. Using `kubectl`, execute the mysql database pod secret creation command on "./mysql-secret.sh" file;

2. Create an volume for the database container, by that, the database keeps/persists its data when it gets dropped. To create this, we're going to use the K8S PersistentVolumeClaim API, which the implementation is located at: "./mysql-persistent-volume-claim.yml";

3. Apply the K8S Deployment of the MySQL database, which will be consumed by the main application, with file located at: "./mysql-deployment.yml";


> ⚠️ Warning
> In case of errors when applying the MySQL Deployment such as `Fatal error: Can't open and lock privilege tables: Table 'mysql.user' doesn't exist`
> Recreate the Minikube container using the `minikube delete` and `minikube start` commands.
