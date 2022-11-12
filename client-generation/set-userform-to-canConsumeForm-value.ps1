$configFiles = Get-ChildItem "..\src\app\core\services\flower-shop\api" -Filter *.service.ts
foreach ($file in $configFiles)
{
    (Get-Content $file.PSPath) |
    Foreach-Object { $_ -replace "useForm = false", "useForm = canConsumeForm" } |
    Set-Content $file.PSPath
}
