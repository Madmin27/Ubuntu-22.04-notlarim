#!/bin/bash

LOG_FILE="/root/gasp.log"
echo "[$(date)]: Script çalıştırılıyor..." >> "$LOG_FILE"
cd /root/avs-operator-setup && ./run.sh opt-in >> "$LOG_FILE" 2>&1
cd

#chmod +x /root/gasprun.sh
#*/5 * * * * /root/gasprun.sh

