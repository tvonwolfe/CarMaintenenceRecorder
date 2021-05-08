FROM ruby:2.7.3-alpine
ENV BUNDLER_VERSION=2.2.16
RUN apk add --update --no-cache \
  bash \
  binutils-gold \
  build-base \
  curl \ 
  file \
  g++ \
  gcc \
  git \
  less \
  libstdc++ \
  libffi-dev \
  libc-dev \
  linux-headers \
  libxml2-dev \
  libxslt-dev \
  libgcrypt-dev \
  make \
  netcat-openbsd \
  nodejs \
  openssl \
  pkgconfig \
  postgresql-dev \
  python3 \
  python2 \
  tzdata \
  yarn
RUN gem install bundler -v 2.2.16
RUN mkdir /app
WORKDIR /app
COPY Gemfile Gemfile.lock ./
RUN bundle check || bundle install
COPY package.json yarn.lock ./
RUN yarn install --check-files
ADD . /app
CMD ["bundle", "exec", "bin/rails", "s", "-b", "0.0.0.0"]
