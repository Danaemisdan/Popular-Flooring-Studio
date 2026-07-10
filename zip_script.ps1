$source = "c:\Users\mahes\Downloads\Popular-Flooring-Studio-main - Copy\Popular-Flooring-Studio-main"
$tempDir = "$env:TEMP\PopFlrStTemp"
$destination = "c:\Users\mahes\Downloads\Popular-Flooring-Studio-Updated.zip"

if (Test-Path $tempDir) {
    Remove-Item -Path $tempDir -Recurse -Force
}

Copy-Item -Path $source -Destination $tempDir -Recurse -Exclude 'node_modules', '.git', 'dist'

if (Test-Path $destination) {
    Remove-Item -Path $destination -Force
}

Compress-Archive -Path "$tempDir\*" -DestinationPath $destination -Force

Remove-Item -Path $tempDir -Recurse -Force
