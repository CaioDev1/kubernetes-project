1. Using `kubectl`, execute the mysql database pod secret creation configuration on "mysql-secret.yml" file;
    ```bash
        kubectl apply -f mysql-secret.yml
    ```

2. Create an volume for the database pod, by that, the database keeps/persists its data when it gets dropped. To create this, we're going to use the K8S PersistentVolumeClaim API;
    ```bash
        kubectl apply -f mysql-persistent-volume-claim.yml
    ```

3. Apply the K8S Deployment of the MySQL database, which will be consumed by the main application;
    ```bash
        `kubectl apply -f mysql-deployment.yml
    ```

4. Create an service for the database pod, it will gives to it and external access point to be consumed by our main application;
    ```bash
        `kubectl apply -f mysql-service.yml
    ```

5. Create an ConfigMap for the main application, in resume it stores all necessary configs for the application in an flexible way using the K8S ConfigMap API;
    ```bash
        `kubectl apply -f app-config.yml
    ```

6. Apply the Deployment of the main application;
    ```bash
        `kubectl apply -f app-deployment.yml
    ```

7. Apply the creation of the NGINX ConfigMap, Deployment and Service LoadBalancer
    ```bash
        `kubectl apply -f nginx-deployment.yml
    ``` 

> ⚠️ Warning
> In case of errors when applying the MySQL Deployment such as `Fatal error: Can't open and lock privilege tables: Table 'mysql.user' doesn't exist`
> Recreate the Minikube container using the `minikube delete` and `minikube start` commands.
