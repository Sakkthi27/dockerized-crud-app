#!/bin/bash

set -e

echo "🔄 Updating package index..."
sudo apt-get update -y

echo "🧹 Removing older versions of Docker if any..."
sudo apt-get remove -y docker docker-engine docker.io containerd runc || true

echo "🔧 Installing dependencies..."
sudo apt-get install -y \
    ca-certificates \
    curl \
    gnupg \
    lsb-release

echo "🔐 Adding Docker GPG key..."
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | \
    sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg

echo \
  "deb [arch=$(dpkg --print-architecture) \
  signed-by=/etc/apt/keyrings/docker.gpg] \
  https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

echo "🔄 Updating package index again..."
sudo apt-get update -y

echo "🐳 Installing Docker Engine and CLI..."
sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

echo "✅ Enabling and starting Docker service..."
sudo systemctl enable docker
sudo systemctl start docker

echo "👤 Adding current user to docker group..."
sudo usermod -aG docker "$USER"

echo "✅ Docker installation completed!"
echo "👉 Please log out and log back in to apply group changes."

echo "🧪 Verifying Docker version:"
docker --version

echo "🧪 Verifying Docker Compose version:"
docker compose version
