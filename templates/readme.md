# {{ visit_card.first_name }} {{ visit_card.last_name }}
{% for contact in contacts +%}
{% if 'href' in contact %}
**{{ contact.type }}**: [{{ contact.label }}]({{ contact.href }})
{% else %}
**{{ contact.type }}**: {{ contact.label }}
{% endif %}
{% endfor %}

## Summary

{{ summary }}

## Hard Skills

{% for skill in hard_skills %}
- {{ skill }}
{% endfor %}

## What Brings Joy

{% for what in what_brings_joy %}
- {{ what }}
{% endfor %}

## Experience

{% for exp in work %}
### {{ exp.organization }}

{{ exp.position }}, {{ exp.start_date }} — {{ exp.end_date }}

{{ exp.description }}
{% for highlight in exp.highlights %}
- {{ highlight }}
{% endfor %}

{% if exp.tags %}
{{ exp.tags|join(' | ') }}
{% endif %}
{% endfor %}

## Education

{% for ed in education %}
### {{ ed.school }}
{% for degree in ed.degrees +%}
**{{ degree.title }}**, {{ degree.start_year }} — {{ degree.end_year }}
{% endfor %}
{% endfor %}

## Additional Education

{% for aed in additional_education %}
### {{ aed.school }}
{% for degree in aed.degrees +%}
**{{ degree.title }}**, {{ degree.start_year }} — {{ degree.end_year }}

{{ degree.description}}
{% endfor %}
{% endfor %}

## Courses

{% for cor in courses %}
### {{ cor.platform }}
{% for item in cor['items'] +%}
**{{ item.name }}**, {{ item.date }}
{% endfor %}
{% endfor %}

## Languages
{% for language in languages +%}
**{{ language.name }}**, {{ language.level }}
{% endfor %}
