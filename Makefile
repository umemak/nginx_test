.PHONY: down
down:
	docker compose down

.PHONY: restart
restart:
	"${MAKE}" down
	docker compose build
	docker compose up -d

.PHONY: applogs
applogs:
	docker compose logs -f app
