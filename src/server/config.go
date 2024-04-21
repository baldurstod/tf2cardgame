package main

type Config struct {
	HTTP      HTTP `json:"http"`
}

type HTTP struct {
	Port          int    `json:"port"`
	HttpsKeyFile  string `json:"https_key_file"`
	HttpsCertFile string `json:"https_cert_file"`
}
