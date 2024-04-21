cls
del .\dist\tf2cardgame.exe
go build -ldflags="-X main.ReleaseMode=false" -o dist/tf2cardgame.exe ./src/server/
.\dist\tf2cardgame.exe
