.PHONY : reset seed

reset:
	node scripts/reset-db.js

seed:
	node scripts/seed-db.js