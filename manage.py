#!/usr/bin/env python
import os
import sys
os.path.realpath(os.path.dirname(__file__))

if __name__ == "__main__":
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "settings_local")

    from django.core.management import execute_from_command_line

    execute_from_command_line(sys.argv)
