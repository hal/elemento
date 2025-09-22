#!/usr/bin/env bash
#
#  Copyright 2023 Red Hat
#
#  Licensed under the Apache License, Version 2.0 (the "License");
#  you may not use this file except in compliance with the License.
#  You may obtain a copy of the License at
#
#      https://www.apache.org/licenses/LICENSE-2.0
#
#  Unless required by applicable law or agreed to in writing, software
#  distributed under the License is distributed on an "AS IS" BASIS,
#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#  See the License for the specific language governing permissions and
#  limitations under the License.
#


# --------------------------------
#
# Run a sample in development mode
#
# --------------------------------

set -Eeuo pipefail
trap cleanup SIGINT SIGTERM ERR EXIT

VERSION=0.0.1

# Change into the script's directory
# Using relative paths is safe!
script_dir=$(cd "$(dirname "${BASH_SOURCE[0]}")" &>/dev/null && pwd -P)
readonly script_dir
cd "${script_dir}"

usage() {
  cat <<EOF
USAGE:
    $(basename "${BASH_SOURCE[0]}") [FLAGS] <sample>

FLAGS:
    -c, --clean         Adds the 'clean' goal
    -h, --help          Prints help information
    -v, --version       Prints version information
    --no-color          Uses plain text output

ARGS:
    <sample>              One of 'f', flow', 'm', or 'music', 'tg', todo-gwt', 'tj' or 'todo-j2cl'
EOF
  exit
}

cleanup() {
  trap - SIGINT SIGTERM ERR EXIT
}

setup_colors() {
  if [[ -t 2 ]] && [[ -z "${NO_COLOR-}" ]] && [[ "${TERM-}" != "dumb" ]]; then
    NOFORMAT='\033[0m' RED='\033[0;31m' GREEN='\033[0;32m' ORANGE='\033[0;33m' BLUE='\033[0;34m' PURPLE='\033[0;35m' CYAN='\033[0;36m' YELLOW='\033[1;33m'
  else
    # shellcheck disable=SC2034
    NOFORMAT='' RED='' GREEN='' ORANGE='' BLUE='' PURPLE='' CYAN='' YELLOW=''
  fi
}

msg() {
  echo >&2 -e "${1-}"
}

die() {
  local msg=$1
  local code=${2-1} # default exit status 1
  msg "$msg"
  exit "$code"
}

version() {
  msg "${BASH_SOURCE[0]} $VERSION"
  exit 0
}

parse_params() {
  CLEAN=""
  while :; do
    case "${1-}" in
    -c | --clean) CLEAN=clean ;;
    -h | --help) usage ;;
    -v | --version) version ;;
    --no-color) NO_COLOR=1 ;;
    -?*) die "Unknown option: $1" ;;
    *) break ;;
    esac
    shift
  done

  ARGS=("$@")
  [[ ${#ARGS[@]} -eq 1 ]] || die "Missing sample. Please use one of 'f', flow', 'm', or 'music', 'tg', todo-gwt', 'tj', 'todo-j2cl'"
  MODE=${ARGS[0]}
  [[ "${MODE}" =~ ^(f|flow|m|music|tg|todo-gwt|tj|todo-j2cl)$ ]] || die "Wrong mode. Please use one of 'f', flow', 'm', or 'music', 'tg', todo-gwt', 'tj', 'todo-j2cl'"
  return 0
}

parse_params "$@"
setup_colors


case "${MODE}" in
  "f"|"flow")
    msg ""
    msg "Run ${YELLOW}Flow${NOFORMAT} sample..."
    msg ""
    cd flow
    mvn ${CLEAN} gwt:devmode -P dev
    ;;
  "m"|"music")
    msg ""
    msg "Run ${YELLOW}Music${NOFORMAT} sample..."
    msg "Run ${YELLOW}npm run watch${NOFORMAT} in ${YELLOW}music${NOFORMAT} when j2cl:dev is ready"
    msg ""
    sleep 1
    cd music
    mvn ${CLEAN} j2cl:watch
    ;;
  "tg"|"todo-gwt")
    msg ""
    msg "Run ${YELLOW}Todo GWT${NOFORMAT} sample..."
    msg ""
    cd todo/gwt
    mvn ${CLEAN} gwt:devmode -P dev
    ;;
  "tj"|"todo-j2cl")
    msg ""
    msg "Run ${YELLOW}Todo J2CL${NOFORMAT} sample..."
    msg "Run ${YELLOW}npm run watch${NOFORMAT} in ${YELLOW}todo/j2cl${NOFORMAT} when j2cl:dev is ready"
    msg ""
    sleep 1
    cd todo/j2cl
    mvn ${CLEAN} j2cl:watch
    ;;
esac
