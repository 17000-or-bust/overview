#!/bin/bash

echo "# Resetting PostgreSQL schema for implementation..."
PGPASSWORD=root /Library/PostgreSQL/10/bin/psql -U postgres -d overview < /Users/Code_mel/Desktop/SDC-Team/overview/react-framework-master/PostgreServer/Seed/schema.sql

echo "# done now...."
echo "# Now Injecting CSV data into Reservations database...."

PGPASSWORD=root /Library/PostgreSQL/10/bin/psql -U postgres -d overview < /Users/Code_mel/Desktop/SDC-Team/overview/react-framework-master/PostgreServer/Seed/loader.sql
echo "# ----- END PostgreSQL Output -----"