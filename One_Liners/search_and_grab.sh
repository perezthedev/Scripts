#!/bin/sh

awk '/practice/{getline; print $4}' input.log > output.csv