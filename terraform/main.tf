provider "google" {
  project = "YOUR_PROJECT"
  region  = "asia-southeast1"
}

resource "google_container_cluster" "gke" {
  name     = "plant-cluster"
  location = "asia-southeast1"
  initial_node_count = 1
}
