def calculate_bike(distance,engine):
    if engine =='small':
        return distance*0.08277
    elif engine == 'medium':
        return distance*0.10086
    elif engine == 'large':
        return distance*0.13237
    else:
        return distance*0.11337

def calculate_petrol_car(distance,engine):
    if engine=='small':
        return distance * 1.2*120
    elif engine == 'medium':
        return distance*1.2*150
    elif engine == 'large':
        return distance*1.2*180

def calculate_diesel_car(distance,engine):
    if engine=='small':
        return distance * 1.2*90
    elif engine == 'medium':
        return distance*1.2*120
    elif engine == 'large':
        return distance*1.2*150
