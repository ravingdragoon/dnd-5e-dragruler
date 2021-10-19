Hooks.once("dragRuler.ready", (SpeedProvider) => {
    
        class DND5eSpeedProvider extends SpeedProvider {
        
        get colors() {
            return [
                {id: "walk", default: 0x00FF00, name: "dnd5e.speeds.walk"},
                {id: "dash", default: 0xFFFF00, name: "dnd5e.speeds.dash"},
                {id: "unreachable", default: 0xFF8000, name: "dnd5e.speeds.unreachable"},
                {id: "felineAgility", default: 9900FF, name: "dnd5e.speeds.felineAgility"},
                {id: "fromProne", default: 0x002AFF, name: "dnd5e.speeds.fromProne"}.
            ]
        }

        //movementDistance = ''
        
        getRanges(token) {
            const actorType = token.actor.data.type;
            const prone = condition.combat-utility-belt-prone;
            const baseSpeed = actor.data.data.attr.movement;
            return [
                {range: baseSpeed * .5, color: ?? "fromProne"},
                {range: baseSpeed, color: "walk"},
                {range: baseSpeed * 2, color: "dash"},
                {range: baseSpeed * 3, color: "unreachable"}
                {range: baseSpeed * 4, color: ?? "felineAgility"}
            ]
            
            return ranges
        }
    }

    dragRuler.registerModule("dnd5e-drag-ruler", DND5eSpeedProvider);
})
