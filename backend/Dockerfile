FROM php:8.2-cli

RUN apt-get update && apt-get install -y \
    git curl zip unzip \
    libpng-dev libonig-dev libxml2-dev libzip-dev \
    && docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd zip \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html

COPY . .

ENV APP_URL=http://localhost
RUN composer install --no-dev --optimize-autoloader --no-interaction

RUN chmod -R 775 storage bootstrap/cache \
    && chown -R www-data:www-data storage bootstrap/cache

EXPOSE 8000

CMD ["sh", "-c", "until php artisan migrate --force 2>/dev/null; do echo 'Waiting for MySQL...'; sleep 3; done && php artisan storage:link 2>/dev/null || true && php artisan serve --host=0.0.0.0 --port=8000"]
