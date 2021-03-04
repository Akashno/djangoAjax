from django.shortcuts import render

from photos.forms import PhotoForm
from django.http import JsonResponse

def photo_add_view(request):
    form = PhotoForm()
    data = {}
    if request.is_ajax() and request.POST:
        form = PhotoForm(request.POST,request.FILES)
        if form.is_valid():
            form.save()
            return JsonResponse(data)

    context = {'form':form}
    return render(request, 'photos/main.html',context)