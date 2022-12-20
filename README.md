Basic Three.js scene created using ChatGPT prompts that can be deployed and hosted within a Docker container

### Installation
* Create your own SSL certificate+key and install them to `./ssl/` using `openssl`
* The NGINX config uses them here:
    
```
ssl_certificate     /etc/nginx/ssl/cert.pem;
ssl_certificate_key /etc/nginx/ssl/key.pem;
```

* Build the Docker container:
```
docker build -t <YOUR_IMAGE_NAME> .
```

* Run the Docker container:
```
docker run -it --rm -p 443:443 <YOUR_IMAGE_NAME>
```

* Navigate to the Three.js scene:
```
https://localhost/
```

You are free to clone this repo and make any necessary adjustments/additions.