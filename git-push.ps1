param (
    [string]$mensaje = "Update"
)

# 1. Mostrar rama actual
Write-Host "📌 Verificando rama actual..."
git branch

# 2. Agregar cambios
Write-Host "➕ Agregando cambios..."
git add .

# 3. Crear commit
Write-Host "📝 Creando commit con mensaje: $mensaje"
git commit -m "$mensaje"

# 4. Sincronizar con remoto (pull con rebase)
Write-Host "🔄 Sincronizando con remoto..."
git pull origin main --rebase

# 5. Subir cambios
Write-Host "🚀 Subiendo cambios a GitHub..."
git push origin main

Write-Host "✅ ¡Listo! Tus cambios están en GitHub."


#Ejecucion
./git-push.ps1 -mensaje "Uso de props con componente Nombre"
