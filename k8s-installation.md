1. Using `kubectl`, execute the mysql database pod secret creation command on "./mysql-secret.sh" file;
2. Create an volume for the database container, by that, the database keeps/persists its data when it gets dropped. To create this, we're going to use the K8S PersistentVolumeClaim API, which the implementation is located at: "./mysql-persistent-volume-claim.yml"

