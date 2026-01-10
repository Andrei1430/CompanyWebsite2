# PowerShell script to rename all files in the current directory to Photo1, Photo2, etc.
# Preserves the original file extensions

# Get all files in the current directory, sorted by name
$files = Get-ChildItem -File | Sort-Object Name

# Counter for renaming
$counter = 1

# Rename each file
foreach ($file in $files) {
    $extension = $file.Extension
    $newName = "Photo$counter$extension"
    
    # Rename the file
    Rename-Item -Path $file.FullName -NewName $newName
    
    Write-Host "Renamed: $($file.Name) -> $newName"
    
    $counter++
}

Write-Host "`nAll files have been renamed!"
