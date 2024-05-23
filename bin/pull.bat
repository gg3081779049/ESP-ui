@echo off

setlocal enabledelayedexpansion

set includeList="src","public",".eslintignore",".env.*",".gitignore","*.js","*.json","*.md"

for %%i in (%includeList%) do (
    if exist "%%i" (
        if /I "%%~xi"==".md" del "%%i"
        if /I "%%~xi"=="" (
            rmdir /S /Q "%%i"
        ) else (
            del /F /Q "%%i"
        )
    )
)

git clone https://github.com/gg3081779049/ESP-ui.git

set "srcDir=./ESP-ui"

if exist "%srcDir%" (
    xcopy "%srcDir%" . /E /I /Y
    echo Copied all files and subfolders from %srcDir% to current directory.
) else (
    echo Directory %srcDir% does not exist.
)

pause