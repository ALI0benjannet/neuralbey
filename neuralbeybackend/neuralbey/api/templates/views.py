from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from .form import CustomUserCreationForm

def inscription(request):
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('connexion')
    else:
        form = CustomUserCreationForm()
        
    return render(request, 'inscription.html', {'form': form})
